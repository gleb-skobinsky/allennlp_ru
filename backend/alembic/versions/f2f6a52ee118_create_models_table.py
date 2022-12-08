"""create models table

Revision ID: f2f6a52ee118
Revises: 
Create Date: 2022-12-06 12:35:06.647457

"""
from alembic import op
import sqlalchemy as sa
from models import get_date_now


# revision identifiers, used by Alembic.
revision = "f2f6a52ee118"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "models",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column("task_id", sa.Integer, sa.ForeignKey("tasks.id")),
        sa.Column("model_name", sa.String),
        sa.Column("registered_name", sa.String),
        sa.Column("model_type", sa.String),
        sa.Column("model_description", sa.String),
        sa.Column("primary_uses", sa.String, nullable=True),
        sa.Column("last_update", sa.Date, default=get_date_now()),
        sa.Column("version", sa.Float, nullable=True),
        sa.Column("relevant_task", sa.String),
        sa.Column("predictor_name", sa.String),
        sa.Column("performance_measure", sa.String),
        sa.Column("unitary_results", sa.String),
        sa.Column("evaluation_dataset", sa.String),
        sa.Column("training_dataset", sa.String),
        sa.Column("training_config", sa.String),
    )


def downgrade() -> None:
    op.drop_table("models")
