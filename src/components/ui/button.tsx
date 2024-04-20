export const PrimaryButton = ({
  children,
  className,
  isDisabled = false,
  onClick,
}: {
  children: React.ReactNode | string;
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}) => (
  <button
    className={`disabled:bg-gray mx-auto rounded-2xl bg-pink px-7 py-2 text-3xl font-bold text-white ${className}`}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export const SecondaryButton = ({
  children,
  className,
  isDisabled = false,
}: {
  children: React.ReactNode | string;
  className?: string;
  isDisabled?: boolean;
}) => (
  <button
    className={`disabled:border-gray disabled:text-gray mx-auto rounded-2xl border-2 px-7 py-2 text-3xl text-pink ${className}`}
    disabled={isDisabled}
  >
    {children}
  </button>
);
