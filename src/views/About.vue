<template>
  <header>
    <img src="../assets/undressed-woman.jpeg" alt="Undressed Woman" />
  </header>
  <main>
    <section>
      <h1>Become <span class="green">Undressed &trade;</span></h1>
      Being <span class="green">Undressed &trade;</span> is all about letting
      yourself forget the harmful prejudices society has instilled in us and
      re-learning to enjoy that forbidden fruit guilt-free. After all, it was
      <span class="green">He</span> who planted that tree for us to enjoy 😉
      <div><a class="button" href="/">Take a bite</a></div>
    </section>
  </main>
</template>

<style scoped>
header > img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

main > section > h1 {
  font-size: 24px;
  line-height: 4rem;
  font-weight: 700 !important;
  color: var(--color-heading);
}

section {
  width: 90%;
  max-width: 650px;
  margin: auto;
  color: var(--color-text);
}

.button {
  display: inline-block;
  background-color: var(--green);
  text-decoration: none;
  color: var(--color-background);
  padding: 8px 16px;
  font-size: 20px;
  font-weight: 600;
  margin: 16px 0;
  border-radius: 8px;
}
</style>
