# Analizador de Sentimientos con IA 🧠🤖

Esta es una aplicación sencilla que utiliza Inteligencia Artificial para leer una frase que escribas y decirte si el sentimiento es **positivo** o **negativo**.

---

## 🚀 Tecnologías usadas (Explicado fácil)

Para que este proyecto funcione, usamos dos partes que se comunican entre sí:

1.  **El Front-end (La "Cara" de la App):**
    - Usamos **React** y **Vite**. Imagina que esto es el diseño y los botones que ves en tu navegador. Es lo que te permite escribir y ver los resultados de forma bonita.
2.  **El Back-end (El "Cerebro" de la App):**
    - Usamos **Python** con algo llamado **FastAPI**. Este es el motor que recibe tu texto y lo procesa.
    - Para que realmente "entienda" lo que escribes, usamos una **IA de Hugging Face (Transformers)**. Es como un cerebro pre-entrenado que ya sabe leer sentimientos.

---

## 🛠️ ¿Qué necesitas para que funcione?

Si quieres correr esto en tu computadora, asegúrate de tener instalado:

1.  **Python 3.10 o superior**: Es el lenguaje que usa el cerebro.
2.  **Node.js**: Es lo que permite que la "cara" de la aplicación funcione.

---

## 🏗️ Pasos para la instalación

Sigue estos pasos en tu terminal/consola:

### 1. Preparar el Cerebro (Backend)

Entra a la carpeta `backend` e instala las librerías necesarias:

```bash
cd backend
pip install -r requirements.txt
```

_Nota: La primera vez puede tardar un poco porque la IA es pesada._

### 2. Preparar la Cara (Frontend)

Entra a la carpeta del frontend e instala sus herramientas:

```bash
cd frontend/analizador-sentimientos-frases
npm install
```

---

## 🏃‍♂️ Cómo ponerla en marcha

Necesitas abrir **dos terminales** al mismo tiempo:

**En la Terminal 1 (Backend):**

```bash
cd backend
uvicorn main:app --reload
```

**En la Terminal 2 (Frontend):**

```bash
cd frontend/analizador-sentimientos-frases
npm run dev
```

¡Listo! Abre el enlace que te dé la Terminal 2 (normalmente `http://localhost:5173`) y empieza a escribir frases.
