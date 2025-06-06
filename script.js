/* styles.css */
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #4a4a4a;
  --accent-color: #007acc;
  --bg-color: #f4f4f4;
  --white: #ffffff;
  --card-bg: #ffffff;
  --border-radius: 12px;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color);
  color: var(--primary-color);
  line-height: 1.6;
  padding: 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 40px;
}

.header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
}

.header img {
  width: 120px;
  height: 120px;
  border-radius: 100px;
  object-fit: cover;
  border: 3px solid var(--accent-color);
}

.header-info {
  flex: 1;
}

.header-info h1 {
  font-size: 32px;
  color: var(--primary-color);
}

.header-info h2 {
  font-size: 20px;
  color: var(--accent-color);
  font-weight: 500;
}

.contact {
  margin-top: 10px;
  font-size: 14px;
  color: var(--secondary-color);
}

.section {
  margin-top: 30px;
}

.section h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--primary-color);
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 4px;
}

.section ul {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}

.section ul li {
  margin-bottom: 6px;
}

.section .job {
  margin-bottom: 15px;
}

.section .job h4 {
  font-size: 16px;
  color: var(--accent-color);
}

.section .job small {
  font-size: 12px;
  color: var(--secondary-color);
}

.languages, .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.languages div, .skills div {
  background-color: var(--bg-color);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid var(--accent-color);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
  }

  .header-info {
    text-align: center;
  }
}
