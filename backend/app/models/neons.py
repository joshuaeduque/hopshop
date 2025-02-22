from sqlmodel import Field, SQLModel

class Neons(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    value: float | None = Field(default=None, index=True)
