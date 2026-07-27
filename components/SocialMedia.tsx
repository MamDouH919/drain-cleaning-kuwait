import React from "react";

export interface SocialMediaLink {
  code: string;
  link: string;
}

type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 1.8c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.75-.07Zm0 4.18a5.86 5.86 0 1 1 0 11.72 5.86 5.86 0 0 1 0-11.72Zm0 1.8a4.06 4.06 0 1 0 0 8.12 4.06 4.06 0 0 0 0-8.12Zm6.06-1.98a1.37 1.37 0 1 1-2.74 0 1.37 1.37 0 0 1 2.74 0Z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.9 2.25h3.37l-7.36 8.41 8.66 11.09h-6.78l-5.31-6.83-6.08 6.83H1.02l7.87-8.99L.58 2.25h6.95l4.8 6.25 5.57-6.25Zm-1.18 17.5h1.87L6.36 4.16H4.36l13.36 15.59Z" />
  </svg>
);

const LinkedInIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.06 8.48h3.72V22H3.06V8.48Zm5.98 0h3.57v1.85h.05c.5-.94 1.7-1.93 3.5-1.93 3.75 0 4.44 2.47 4.44 5.68V22h-3.72v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.29V22H9.04V8.48Z" />
  </svg>
);

const YouTubeIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.69-1.45 1.32-1.99 1.4-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.57-.15-.2-1.23-1.63-1.23-3.12s.78-2.21 1.06-2.51c.28-.3.61-.38.81-.38l.58.01c.19.01.44-.07.69.53.25.6.85 2.08.92 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.5.22.57.35.07.13.07.73-.18 1.42Z" />
  </svg>
);

const TelegramIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm4.91 7.22c.1 0 .32.02.46.14a.5.5 0 0 1 .17.33c.02.09.04.3.02.47-.18 1.9-.96 6.5-1.36 8.62-.17.9-.5 1.2-.82 1.23-.7.07-1.22-.46-1.9-.9-1.05-.69-1.65-1.12-2.67-1.8-1.19-.78-.42-1.21.26-1.91.17-.18 3.24-2.98 3.3-3.23.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.1.02-1.79 1.14-5.06 3.34-.48.33-.91.49-1.3.48-.43 0-1.25-.24-1.87-.44-.75-.24-1.35-.37-1.3-.79.03-.21.33-.43.9-.66 3.5-1.52 5.83-2.53 7-3.01 3.33-1.39 4.02-1.63 4.48-1.64Z" />
  </svg>
);

const WebsiteIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14A8.2 8.2 0 0 1 4 12c0-.69.1-1.36.26-2h3.38a16.5 16.5 0 0 0 0 4H4.26Zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.07 16Zm2.95-8H5.07a7.99 7.99 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a7.99 7.99 0 0 1-4.33 3.56ZM16.36 14a16.5 16.5 0 0 0 0-4h3.38c.16.64.26 1.31.26 2 0 .69-.1 1.36-.26 2h-3.38Z" />
  </svg>
);

const TikTokIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const SnapchatIcon = ({ className }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" />
  </svg>
);

type SocialConfig = {
  code:
    | "FACEBOOK"
    | "INSTAGRAM"
    | "X"
    | "LINKEDIN"
    | "YOUTUBE"
    | "WHATSAPPGROUP"
    | "WEBSITE"
    | "TELEGRAM"
    | "SNAPCHAT"
    | "TIKTOK";
  name: string;
  nameAr: string;
  Icon: (props: IconProps) => React.ReactElement;
  /** Tailwind arbitrary-value background utility — kept as a full literal so the JIT compiler picks it up. */
  gradientClass: string;
  iconColorClass: string;
};

const SOCIAL_CONFIG: SocialConfig[] = [
  {
    code: "FACEBOOK",
    name: "Facebook",
    nameAr: "فيسبوك",
    Icon: FacebookIcon,
    gradientClass: "bg-[linear-gradient(135deg,#1877F2,#0D5DBF)]",
    iconColorClass: "text-white",
  },
  {
    code: "INSTAGRAM",
    name: "Instagram",
    nameAr: "إنستغرام",
    Icon: InstagramIcon,
    gradientClass: "bg-[linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)]",
    iconColorClass: "text-white",
  },
  {
    code: "X",
    name: "X",
    nameAr: "X",
    Icon: XIcon,
    gradientClass: "bg-[linear-gradient(135deg,#000000,#000000)]",
    iconColorClass: "text-white",
  },
  {
    code: "LINKEDIN",
    name: "LinkedIn",
    nameAr: "لينكد ان",
    Icon: LinkedInIcon,
    gradientClass: "bg-[linear-gradient(135deg,#0077B5,#005885)]",
    iconColorClass: "text-white",
  },
  {
    code: "YOUTUBE",
    name: "YouTube",
    nameAr: "يوتيوب",
    Icon: YouTubeIcon,
    gradientClass: "bg-[linear-gradient(135deg,#FF0000,#CC0000)]",
    iconColorClass: "text-white",
  },
  {
    code: "TIKTOK",
    name: "TikTok",
    nameAr: "تيكتوك",
    Icon: TikTokIcon,
    gradientClass: "bg-[linear-gradient(135deg,#000000,#EE1D52,#69C9D0)]",
    iconColorClass: "text-white",
  },
  {
    code: "WHATSAPPGROUP",
    name: "WhatsApp Group",
    nameAr: "مجموعة واتس اب",
    Icon: WhatsAppIcon,
    gradientClass: "bg-[linear-gradient(135deg,#25D366,#128C7E)]",
    iconColorClass: "text-white",
  },
  {
    code: "WEBSITE",
    name: "Website",
    nameAr: "موقع الويب",
    Icon: WebsiteIcon,
    gradientClass: "bg-[linear-gradient(135deg,#6366F1,#8B5CF6)]",
    iconColorClass: "text-white",
  },
  {
    code: "TELEGRAM",
    name: "Telegram",
    nameAr: "تيليجرام",
    Icon: TelegramIcon,
    gradientClass: "bg-[linear-gradient(135deg,#0088CC,#0088CC)]",
    iconColorClass: "text-white",
  },
  {
    code: "SNAPCHAT",
    name: "Snapchat",
    nameAr: "سنابشت",
    Icon: SnapchatIcon,
    gradientClass: "bg-[linear-gradient(135deg,#FFFC00,#F2F200)]",
    iconColorClass: "text-black",
  },
];

export default function SocialMediaLinks({
  links,
  isArabic = true,
  className = "",
}: {
  links: SocialMediaLink[];
  isArabic?: boolean;
  className?: string;
}) {
  const linksMap = new Map(links.map((l) => [l.code, l.link]));

  const availableLinks = SOCIAL_CONFIG.filter((social) =>
    linksMap.has(social.code)
  ).map((social) => ({
    ...social,
    url: linksMap.get(social.code)!, // ← from API
  }));

  if (availableLinks.length === 0) return null;

  return (
    <div className={className}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-wrap items-start justify-center gap-6">
          {availableLinks.map(({ code, name, nameAr, Icon, gradientClass, iconColorClass, url }, index) => (
            <a
              key={code}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isArabic ? nameAr : name}
              title={isArabic ? nameAr : name}
              className="flex animate-fade-in-up flex-col items-center gap-1.5 no-underline"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span
                className={`flex h-15 w-15 items-center justify-center rounded-[22px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition duration-150 hover:scale-[1.08] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] active:scale-[0.94] ${gradientClass} ${iconColorClass}`}
              >
                <Icon className="h-8 w-8" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
