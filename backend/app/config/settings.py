from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Central application configuration, sourced from environment variables."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    app_name: str = "Sandbox API"
    environment: str = "development"
    debug: bool = True
    api_v1_prefix: str = "/api/v1"
    app_version: str = "0.1.0"

    database_url: str = "postgresql+psycopg2://sandbox:sandbox@localhost:5432/sandbox"

    cors_origins: str = "http://localhost:5173,http://localhost:4173"

    log_level: str = "INFO"

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
