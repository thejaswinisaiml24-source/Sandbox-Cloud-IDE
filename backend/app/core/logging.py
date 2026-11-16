import logging
import sys

from app.config.settings import get_settings


def configure_logging() -> None:
    """Configure application-wide structured console logging."""
    settings = get_settings()

    log_format = "%(asctime)s | %(levelname)-8s | %(name)s | %(message)s"

    logging.basicConfig(
        level=settings.log_level.upper(),
        format=log_format,
        datefmt="%Y-%m-%dT%H:%M:%S",
        stream=sys.stdout,
        force=True,
    )

    # Quiet down noisy third-party loggers in production.
    if settings.environment == "production":
        logging.getLogger("uvicorn.access").setLevel(logging.WARNING)


logger = logging.getLogger("sandbox")
