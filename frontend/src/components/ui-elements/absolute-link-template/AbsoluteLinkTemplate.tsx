interface AbsoluteLinkTemplateProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

const AbsoluteLinkTemplate = ({
  url,
  children,
  className,
}: AbsoluteLinkTemplateProps): React.JSX.Element => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default AbsoluteLinkTemplate;
