from decouple import config

CI = "ci"
PRODUCTION = "prod"
DEVELOPMENT = "dev"

ENVIRONMENT = config("ENVIRONMENT", default="dev")

if ENVIRONMENT == DEVELOPMENT:
    from pyconf.settings.dev import *
elif ENVIRONMENT == PRODUCTION:
    from pyconf.settings.prod import *
elif ENVIRONMENT == CI:
    from pyconf.settings.ci import *
else:
    raise ValueError("please configure environment value")
