

# Contact Form with Web3Forms

## Overview

Replace the current `mailto:` approach with Web3Forms, a free service that receives form submissions and forwards them to `hello@intinuous.com`. After submission, the page will show a "Thank You" message instead of opening an email client.

## What you need to do first

1. Go to [web3forms.com](https://web3forms.com)
2. Enter `hello@intinuous.com` and click "Create Access Key"
3. Check your inbox for the access key and share it here

The access key is a public key (safe to store in code).

## What will change

- The form will `POST` data to `https://api.web3forms.com/submit` instead of constructing a mailto link
- On success, the form hides and a "Thank You" message appears with a note that you'll respond soon
- On failure, a toast notification tells the user something went wrong
- A loading state on the button prevents double submissions
- No new dependencies needed -- just a `fetch` call

## Technical Details

### Modified: `src/pages/Contact.tsx`

- Add `useState` for `submitted` (boolean) and `submitting` (boolean)
- Replace `onSubmit` handler:
  - `POST` to `https://api.web3forms.com/submit` with JSON body containing the access key + form fields
  - On success: set `submitted = true`
  - On error: show toast with error message
- Conditionally render either the form or a thank-you message based on `submitted`
- Button shows "Sending..." with disabled state while submitting
- Thank-you message includes a "Send another message" link to reset the form

