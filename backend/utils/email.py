import logging
from pathlib import Path
from typing import Any, Dict, Optional

# import emails  # Uncomment when implementing email functionality
# from emails.template import JinjaTemplate
from pydantic import EmailStr

from backend.core.config import settings


def send_email(
    email_to: EmailStr,
    subject_template: str = "",
    html_template: str = "",
    environment: Dict[str, Any] = {},
) -> None:
    """
    Send an email using the emails library.

    In a production environment, you would configure this with your SMTP server.
    For development, this function logs the email content instead.
    """
    # In production, replace this with actual email sending
    # For now, we'll just log the email content
    logging.info(f"Would send email to {email_to}")
    logging.info(f"Subject: {subject_template}")
    logging.info(f"Content: {html_template}")
    logging.info(f"Variables: {environment}")

    # Uncomment and configure this for production use
    """
    message = emails.Message(
        subject=JinjaTemplate(subject_template),
        html=JinjaTemplate(html_template),
        mail_from=("HopShop", settings.EMAILS_FROM_EMAIL),
    )
    smtp_options = {"host": settings.SMTP_HOST, "port": settings.SMTP_PORT}
    if settings.SMTP_TLS:
        smtp_options["tls"] = True
    if settings.SMTP_USER:
        smtp_options["user"] = settings.SMTP_USER
    if settings.SMTP_PASSWORD:
        smtp_options["password"] = settings.SMTP_PASSWORD
    response = message.send(to=email_to, render=environment, smtp=smtp_options)
    logging.info(f"send email result: {response}")
    """


def send_password_reset_email(email_to: EmailStr, token: str) -> None:
    """
    Send a password reset email with a token.
    """
    project_name = settings.PROJECT_NAME
    subject = f"{project_name} - Password Recovery"

    # In a real app, you'd use a template file
    # For simplicity, we'll use a string template here
    html_template = f"""
    <p>Hi,</p>
    <p>You have requested to reset your password for {project_name}.</p>
    <p>Please use the following link to reset your password:</p>
    <p><a href="{settings.NEXTAUTH_URL}/auth/reset-password?token={token}">
    Reset Password
    </a></p>
    <p>This link will expire in 30 minutes.</p>
    <p>If you didn't request this, please ignore this email.</p>
    <p>Regards,<br/>The {project_name} Team</p>
    """

    send_email(
        email_to=email_to,
        subject_template=subject,
        html_template=html_template,
        environment={"project_name": settings.PROJECT_NAME, "token": token},
    )
