import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import VoiceAgentOrb from '@/components/VoiceAgentOrb';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  exposure: z.string().trim().min(1, 'Please describe your identity exposure').max(500, 'Must be less than 500 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const WEB3FORMS_ACCESS_KEY = '4aea0823-45b3-412e-b0a0-3a83ad455568';

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormData>({
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
          subject: 'Early Access Request',
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6 py-12"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                <h2 className="text-2xl font-light">Thank You</h2>
                <p className="text-muted-foreground">
                  We've received your inquiry and will respond personally.
                </p>
                <button
                  onClick={() => { setSubmitted(false); form.reset(); }}
                  className="text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-light">
                    <span className="text-gradient-gold">Request Early Access</span>
                  </h1>
                  <p className="text-muted-foreground">
                    We respond to every inquiry personally. No automated sequences.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="exposure"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Describe your identity exposure in a sentence</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g. I'm a working actor whose likeness has appeared in unauthorized AI-generated content." rows={3} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="rounded-full gap-2" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Request Early Access'}
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </Button>
                  </form>
                </Form>
              </>
            )}

            <div className="pt-8 border-t border-border/30">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <VoiceAgentOrb />
    </div>
  );
};

export default Contact;
