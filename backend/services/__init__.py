from ..db.models.neon import Neon
from .neon_service import get_all_neons

__all__ = [
    "get_all_neons",
    "Neon",
]
# This file imports the Neon model and the get_all_neons function from the neon_service module.
# It also defines the __all__ variable to specify the public API of the module.
# This allows other modules to import these components when they import this module.
# The __all__ variable is a convention in Python that indicates which names should be considered public
# when the module is imported using the from module import * syntax.
#
# The neon_service module contains the logic for interacting with the Neon model,
# including functions for creating, updating, and deleting neons in the database.
# The Neon model represents the structure of the neon objects in the database.
# This module serves as a central location for managing the neon-related services
# and models, making it easier to maintain and organize the codebase.