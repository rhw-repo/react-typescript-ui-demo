import { useNavigate } from "react-router-dom";

interface GoHomeLinkTemplateProps {
  goHomeLinkValue: React.JSX.Element;
}

const GoHomeLinkTemplate = ({
  goHomeLinkValue,
}: GoHomeLinkTemplateProps): React.JSX.Element => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: false });
  };

  return (
    <a
      href="/"
      aria-label="Go to home page."
      className="interactive navbar-interactive interactive--state"
      onClick={goHome}
    >
      {goHomeLinkValue}
    </a>
  );
};

export default GoHomeLinkTemplate;
