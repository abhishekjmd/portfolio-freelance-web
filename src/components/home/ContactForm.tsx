import { useId, useState } from "react";
import toast from "react-hot-toast";
import React from "react";
import { FadeIn } from "../FadeIn";

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-gray-500/20 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white transition-all duration-200 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-90 peer-focus:scale-90 peer-focus:font-semibold peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-blue-400"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    setLoading(true);
    e.preventDefault();

    const personName = e.currentTarget.person_name.value;
    const email = e.currentTarget.email.value;
    const company = e.currentTarget.company.value;
    const message = e.currentTarget.message.value;

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${personName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`;
    setLoading(false);
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/919825571401?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.location.href = whatsappUrl;
  };

  return (
    <FadeIn className="">
      <form className="" method="POST" onSubmit={handleSubmit}>
        <div className="isolate  -space-y-px rounded-2xl bg-gray-900/20">
          <TextInput
            label="Name"
            name="person_name"
            autoComplete="name"
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
          />
          <TextInput label="Message" name="message" required />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-6 px-6 py-2 text-white border rounded-3xl border-gray-500/20 bg-gray-900 focus:outline-none hover:ring-4 hover:ring-blue-400 transition-all disabled:bg-gray-500"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </form>
    </FadeIn>
  );
}
