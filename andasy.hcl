app_name = "baho-tech"

app {
  primary_region = "kgl"

  env = {
    NODE_ENV = "production"
    PORT = "3001"
    CLIENT_ORIGIN = "https://baho-tech.andasy.dev"
    CLIENT_ORIGINS = "https://baho-tech.andasy.dev"
  }

  port = 3001

  compute {
    cpu = 1
    memory = 1024
    cpu_kind = "shared"
  }

  process {
    name = "web"
  }

  storage {
    name = "baho-tech-data"
    destination = "/app/backend/data"
  }

}
