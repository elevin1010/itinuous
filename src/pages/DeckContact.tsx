import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import logoMark from '@/assets/intinuous-mark-clean.png';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  exposure: z.string().trim().min(1, 'Please describe your identity exposure').max(500, 'Must be less than 500 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const WEB3FORMS_ACCESS_KEY = '4aea0823-45b3-412e-b0a0-3a83ad455568';

const DeckContact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', exposure: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          message: data.exposure,
          subject: 'Early Access Request (Deck)',
          source: 'talent-deck',
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        toast({ title: 'Something went wrong', description: 'Please try again later.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Network error', description: 'Could not send your message. Please try again.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#FAF8F4',
        color: '#181614',
        fontFamily: "'Jost', sans-serif",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Header */}
      <header className="pt-10 pb-6 flex items-center justify-center gap-3">
        <img src={logoMark} alt="Intinuous" className="h-8 w-auto" />
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: '0.85rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#7A7570',
          }}
        >
          Intinuous
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-start justify-center px-6 pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 py-16"
            >
              <CheckCircle className="w-14 h-14 mx-auto" style={{ color: '#B8924A' }} />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: '#181614',
                }}
              >
                Thank You
              </h2>
              <p style={{ color: '#7A7570', fontSize: '0.95rem' }}>
                We've received your inquiry and will respond personally.
              </p>
              <button
                onClick={() => { setSubmitted(false); reset(); }}
                style={{ color: '#B8924A', fontSize: '0.875rem' }}
                className="hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              {/* Form card with gold left bar */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2DDD8',
                  borderRadius: '2px',
                }}
              >
                {/* Gold accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: '#B8924A' }}
                />

                <div className="p-8 md:p-10 pl-10 md:pl-12 space-y-8">
                  <div className="space-y-2">
                    <h1
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '2rem',
                        fontWeight: 600,
                        color: '#181614',
                        lineHeight: 1.2,
                      }}
                    >
                      Request Early Access
                    </h1>
                    <p style={{ color: '#7A7570', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      We respond to every inquiry personally. No automated sequences.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#7A7570',
                          }}
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          placeholder="Your name"
                          {...register('name')}
                          style={{
                            width: '100%',
                            padding: '0.6rem 0.75rem',
                            border: '1px solid #E2DDD8',
                            borderRadius: '2px',
                            backgroundColor: '#FFFFFF',
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '0.9rem',
                            color: '#181614',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#B8924A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#E2DDD8')}
                        />
                        {errors.name && (
                          <p style={{ color: '#c0392b', fontSize: '0.8rem' }}>{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#7A7570',
                          }}
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          {...register('email')}
                          style={{
                            width: '100%',
                            padding: '0.6rem 0.75rem',
                            border: '1px solid #E2DDD8',
                            borderRadius: '2px',
                            backgroundColor: '#FFFFFF',
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '0.9rem',
                            color: '#181614',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#B8924A')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#E2DDD8')}
                        />
                        {errors.email && (
                          <p style={{ color: '#c0392b', fontSize: '0.8rem' }}>{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Exposure */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="exposure"
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#7A7570',
                        }}
                      >
                        Describe your identity exposure in a sentence
                      </label>
                      <textarea
                        id="exposure"
                        rows={3}
                        placeholder="e.g. I'm a working actor whose likeness has appeared in unauthorized AI-generated content."
                        {...register('exposure')}
                        style={{
                          width: '100%',
                          padding: '0.6rem 0.75rem',
                          border: '1px solid #E2DDD8',
                          borderRadius: '2px',
                          backgroundColor: '#FFFFFF',
                          fontFamily: "'Jost', sans-serif",
                          fontSize: '0.9rem',
                          color: '#181614',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#B8924A')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#E2DDD8')}
                      />
                      {errors.exposure && (
                        <p style={{ color: '#c0392b', fontSize: '0.8rem' }}>{errors.exposure.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        backgroundColor: '#181614',
                        color: '#FAF8F4',
                        padding: '0.7rem 2rem',
                        borderRadius: '999px',
                        border: 'none',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        opacity: submitting ? 0.6 : 1,
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        if (!submitting) e.currentTarget.style.backgroundColor = '#B8924A';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#181614';
                      }}
                    >
                      {submitting ? 'Sending...' : 'Request Early Access'}
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        className="py-6 text-center"
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          color: '#7A7570',
          borderTop: '1px solid #E2DDD8',
        }}
      >
        Confidential · intinuous.com
      </footer>
    </div>
  );
};

export default DeckContact;
