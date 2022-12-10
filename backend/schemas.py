import datetime as _dt
import pydantic as _pydantic
from pydantic.schema import Optional
from typing import Union, List
from datetime import date


class _NLPModelBase(_pydantic.BaseModel):
    task_id: Optional[int]
    model_name: Optional[str]
    registered_name: Optional[str]
    model_type: Optional[str]
    model_description: Optional[str]
    primary_uses: Optional[str]
    last_update: Optional[date]
    version: Optional[float]
    relevant_task: Optional[str]
    predictor_name: Optional[str]
    performance_measure: Optional[str]
    unitary_results: Optional[str]
    evaluation_dataset: Optional[str]
    training_dataset: Optional[str]
    training_config: Optional[str]


class NLPModel(_NLPModelBase):
    id: int

    class Config:
        orm_mode = True


class ModelCreate(_NLPModelBase):
    class Config:
        orm_mode = True


class _TaskBase(_pydantic.BaseModel):
    name: str
    description: str
    models: Optional[List[NLPModel]]


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
