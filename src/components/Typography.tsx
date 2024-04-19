export const Heading = ({
  children,
}: {
  children: React.ReactNode | string;
}) => (
  <h1 className="whitespace-break-spaces text-6xl font-semibold sm:text-6xl sm:leading-tight">
    {children}
  </h1>
);
