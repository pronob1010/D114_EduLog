from django.contrib.auth.models import BaseUserManager

class UserProfileManager(BaseUserManager):
    def create_user(self, email, username, firstname, lastname, password=None):
        if not email:
            raise ValueError("User must have email.")
        email = self.normalize_email(email)
        user = self.model(email = email, username = username, firstname=firstname, lastname = lastname)
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self, email, username, firstname, lastname, password):
        user = self.create_user(email, username, firstname, lastname, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using = self._db)
        return user