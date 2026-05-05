<template>
  <footer id="contact">
    <div class="footer-inner container">
      <h2>Kontakt</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/henrik-oddløkken-1694ab63"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  margin-top: auto;
}

.footer-inner {
  padding: 2rem 3rem 4rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

ul a {
  color: var(--primary-text);
  text-decoration: none;
  font-weight: 500;
}

ul a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  footer {
    text-align: center;
  }
}
</style>
