export default function Star({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#0d1220" />
      <path
        d="M16 6l2.2 7.8L26 16l-7.8 2.2L16 26l-2.2-7.8L6 16l7.8-2.2z"
        fill="#fff"
      />
    </svg>
  );
}
