import datetime as _dt

import pydantic as _pydantic


class _TaskBase(_pydantic.BaseModel):
    name: str
    description: str


class TaskCreate(_TaskBase):

    class Config:
        orm_mode = True


class TaskDelete(_TaskBase):

    class Config:
        orm_mode = True


class Task(_TaskBase):
    id: int

    class Config:
        orm_mode = True


class AllTasks(_TaskBase):

    class Config:
        orm_mode = True


class _ExampleBase(_pydantic.BaseModel):
    sentence: str
    document: str
    question: str


class ExampleCreate(_ExampleBase):
    pass


class Example(_ExampleBase):
    id: int
    task_id: int
    date_created: _dt.datetime
    date_last_updated: _dt.datetime

    class Config:
        orm_mode = True
