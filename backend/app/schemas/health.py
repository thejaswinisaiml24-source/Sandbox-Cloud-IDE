from pydantic import BaseModel, ConfigDict


class HealthResponse(BaseModel):
    """Response payload for the health check endpoint."""

    model_config = ConfigDict(json_schema_extra={
        "example": {
            "status": "ok",
            "version": "0.1.0",
            "environment": "development",
        }
    })

    status: str
    version: str
    environment: str
