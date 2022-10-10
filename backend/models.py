import datetime as _dt

import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database


class Task(_database.Base):
    __tablename__ = "tasks"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, unique=True, index=True)
    description = _sql.Column(_sql.String)

    examples = _orm.relationship("Example", back_populates="task")


class Example(_database.Base):
    __tablename__ = "examples"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    task_id = _sql.Column(_sql.Integer, _sql.ForeignKey("tasks.id"))
    sentence = _sql.Column(_sql.String)
    document = _sql.Column(_sql.String)
    question = _sql.Column(_sql.String)

    task = _orm.relationship("Task", back_populates="examples")
