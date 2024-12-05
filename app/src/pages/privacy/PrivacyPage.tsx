import SectionHeading from "@/components/shared/SectionHeading";

const PrivacyPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-primary">
        privacy policy.
      </h1>
      <p className="text-muted-foreground">Last Updated: Sep 2024</p>
      <SectionHeading>Hey, Welcome!</SectionHeading>
      <p className="text-muted-foreground">
        Thanks for stopping by! This Privacy Policy is just here to let you know
        how things work around here. My website is mainly about showcasing my
        work, and I'm all about respecting your privacy.
      </p>
      <SectionHeading>
        What Information I Collect (Hint: Not Much)
      </SectionHeading>
      <p className="text-muted-foreground">
        Honestly, this is just a static portfolio site, so I don't actively
        collect any personal information. There's no account creation, no
        tracking cookies, and definitely no sneaky data gathering. 1. Chatbot
        Conversations If you send a message through the chatbot, it might be
        stored for caching and training purposes. So please avoid sharing any
        confidential info in the chat. 2. Contact Info If you reach out via
        email or the contact form, the info you provide is entirely up to you.
        I'll only use it to reply and have a conversation with you—no funny
        business.
      </p>
      <SectionHeading>How I Use the Info</SectionHeading>
      <p className="text-muted-foreground">
        Here's what I might do with any information I collect: Make sure the
        site is running smoothly Improve the website based on feedback you might
        share Respond to your questions or feedback
      </p>

      <SectionHeading>Sharing Your Info (Spoiler: I Don't)</SectionHeading>
      <p className="text-muted-foreground">
        I don't sell, trade, or rent your personal info. If you shared something
        sensitive by accident, feel free to reach out, and I'll help you remove
        it.
      </p>

      <SectionHeading>Security (The Internet Isn't Perfect)</SectionHeading>
      <p className="text-muted-foreground">
        I'll do my best to keep any info you share safe, but let's be real—no
        system is foolproof. While I'll take reasonable steps to protect your
        info, I can't promise 100% security.
      </p>
      <SectionHeading>Policy Updates (No Surprises)</SectionHeading>
      <p className="text-muted-foreground">
        This policy is current as of Sep 2024. If I make any changes, I'll
        update it here, so you're always in the loop. Feel free to check back
        occasionally, but don't worry—I'm not making any big changes without
        letting you know.
      </p>
      <SectionHeading>Got Questions?</SectionHeading>
      <p className="text-muted-foreground">
        If you have any questions, concerns, or just want to say hi, drop me an
        email at{" "}
        <span className="font-medium text-primary">prabhjot1671@gmail.com</span>{" "}
        or use the contact form. I'd love to hear from you!
      </p>
    </div>
  );
};

export default PrivacyPage;
