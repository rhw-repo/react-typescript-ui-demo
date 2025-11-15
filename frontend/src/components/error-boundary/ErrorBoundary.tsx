import { type ErrorInfo, type ReactNode, Component } from "react";
import debug from "debug";
import styles from "./ErrorBoundary.module.css";
import computerImageWebp from "../../assets/images/vertex-designs-uW0Tj-GgaZw-unsplash.webp";
import compputerImageAvif from "../../assets/images/vertex-designs-uW0Tj-GgaZw-unsplash.avif";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static logger = debug("ErrorBoundary:error");

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    ErrorBoundary.logger(error, info);
  }

  handleReset = (): void => {
    window.location.href = "/";
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <div className={styles.errorContainer}>
            <div className={styles.error}>
              <picture className={styles.errorPictureTag} role="presentation">
                <source srcSet={computerImageWebp} type="image/webp" />
                <img
                  src={compputerImageAvif}
                  alt="Error illustration"
                  className={styles.errorImage}
                />
              </picture>
              <p className={styles.errorMessage}>
                An internal error has occurred.
              </p>
              <p>Our apologies, click the button below to go back to Home.</p>
              <p>If this problem persists, please contact the administrator.</p>
              <button
                type="button"
                onClick={this.handleReset}
                className="interactive button--primary"
              >
                Go Home
              </button>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
