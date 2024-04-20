export const PrimaryButton = ({
  children,
  className,
  isDisabled = false,
}: {
  children: React.ReactNode | string;
  className?: string;
  isDisabled?: boolean;
}) => (
  <button
    className={`mx-auto rounded-2xl bg-pink px-7 py-2 text-3xl font-bold text-white disabled:bg-[#B0B0B0] ${className}`}
    disabled={isDisabled}
  >
    {children}
  </button>
);
