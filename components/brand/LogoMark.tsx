type LogoMarkProps = {
  className?: string;
  strokeWidth?: number;
};

export function LogoMark({ className, strokeWidth = 1.6 }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 52 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 34 L15 16 L26 34 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M13 34 L26 8 L39 34 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M24 34 L35 16 L46 34 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
