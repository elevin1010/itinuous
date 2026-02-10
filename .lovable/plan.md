

# Add a Contact Page

## Overview

Create a simple, clean contact page at `/contact` that matches the existing page design language (Legal, Privacy). Since there's no backend, the form will compose a `mailto:` link with the form contents pre-filled -- consistent with how all CTAs on the site already work.

## What You'll See

- A new "Contact" page with fields for **Name**, **Email**, **Subject**, and **Message**
- A "Send Message" button that opens the user's email client with the form contents pre-filled to `hello@intinuous.com`
- Client-side validation using `zod` (required fields, valid email format, length limits)
- The same dark, minimal layout used on Legal and Privacy pages (Navbar, Footer, fade-in animation)
- A link to the Contact page added in the **Footer** navigation (replacing the current mailto Contact link)

## Technical Details

### New file: `src/pages/Contact.tsx`

- Page layout mirrors `Legal.tsx`: Navbar at top, Footer at bottom, scroll-to-top on mount, `max-w-3xl` centered container
- Form built with `react-hook-form` + `zod` resolver for validation
- Fields: Name (text), Email (email), Subject (text), Message (textarea)
- On submit: constructs a `mailto:hello@intinuous.com` link with subject and body populated from form data, opens via anchor click
- Gold gradient heading: "Get in Touch"
- Subtle intro line: "We welcome inquiries from individuals and organizations."
- Uses existing `Input`, `Textarea`, `Button`, `Label` components
- Framer Motion fade-in on load

### Modified file: `src/App.tsx`

- Add route: `<Route path="/contact" element={<Contact />} />`

### Modified file: `src/components/sections/Footer.tsx`

- Change the existing `mailto:` Contact link to a `<Link to="/contact">` instead

