<template>
  <img src="../assets/undressed-woman.jpeg" alt="Undressed Woman" />
  <section class="container">
    <h1>Become <span class="accent">Undressed &trade;</span></h1>
    <p>
      Here, the unspoken finds its voice and inhibitions are left behind.
      Immerse yourself in a world where
      <span class="accent">personal secrets take center stage</span>, shared
      anonymously, and without judgment. Unveil your deepest desires, explore
      untold stories, and embrace the <span class="accent">freedom</span> to
      express your innermost passions.
    </p>
    <div><a class="button" href="/speak">Speak your truth</a></div>
  </section>
  <section class="container">
    <h1><span class="accent">Naked</span> Truth</h1>
    <p>
      Haven't you noticed? This world is full of truth-loving liars! They
      proclaim the value of <span class="accent">honesty</span>, yet, force us
      to stay silent about the things that define our very nature.
    </p>
    <p>
      Being <span class="accent">Undressed &trade;</span> is all about letting
      yourself forget the harmful prejudices society has instilled in us and
      re-learning to enjoy that forbidden fruit guilt-free. After all, it was
      <span class="accent">He</span> who planted that tree for us to enjoy 😉
    </p>
    <div><a class="button" href="/">Take a bite</a></div>
  </section>
  <br />
</template>

<style scoped>
img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

section {
  margin: 8px auto;
  color: var(--color-text);
}
section > h1 {
  font-size: 24px;
  line-height: 3rem;
  font-weight: 700 !important;
  color: var(--color-heading);
}
section > p {
  margin: 4px 0;
}

.button {
  display: inline-block;
  background-color: var(--accent);
  text-decoration: none;
  color: var(--color-background);
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0;
  border-radius: 8px;
  border: none;
}
</style>
