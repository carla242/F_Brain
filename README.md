projet DevOps
# 🎬 Best Movies

**Best Movies** est une application web complète permettant de consulter les derniers films ajoutés et d’en ajouter de nouveaux. Elle utilise un frontend React, un backend Django REST, une base de données PostgreSQL et une architecture dockerisée.

## 🚀 Fonctionnalités

- **Page 1 - Liste des films (GET)**  
  Affiche les 10 derniers films ajoutés dans la base de données.

- **Page 2 - Ajouter un film (POST)**  
  Permet d’ajouter un film en renseignant son titre via un formulaire.

## 🧱 Architecture
📁 client/ → Frontend React + Vite + Yarn
📁 server/ → Backend Django + Celery + PostgreSQL
📁 proxy/ → Nginx pour le reverse proxy
📄 docker-compose.yml → Déploiement des services


## ⚙️ Technologies utilisées

- Frontend : React, Vite, CSS personnalisé
- Backend : Django, Django REST Framework
- Base de données : PostgreSQL
- Task queue : Celery + RabbitMQ
- Proxy : Nginx
- Monitoring : Prometheus + Grafana
- Déploiement : Docker & docker-compose

## 📦 Lancement avec Docker

```bash
docker-compose up --build

