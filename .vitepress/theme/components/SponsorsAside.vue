<template>
  <div>
    <a href="javascript:void(0);" class="sponsors-aside-text">
      赞助商
    </a>
    <div class="sponsor-container special">
      <a class="sponsor-item action">成为赞助商</a>
    </div>
  </div>
</template>

<style scoped>
.sponsors-aside-text {
  color: var(--vp-c-text-3);
  display: block;
  margin: 3em 0 1em;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.sponsor-container {
  --max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
  column-gap: 4px;
}

.sponsor-item {
  margin: 2px 0;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-inline: 20px;
  border-radius: 2px;
  transition: background-color 0.2s ease;
  height: calc(var(--max-width) / 2 - 6px);
  font-size: 13px;
}
.sponsor-item.action {
  font-size: 11px;
  color: var(--vt-c-text-3);
}
.sponsor-item img {
  max-width: calc(var(--max-width) - 30px);
  max-height: calc(var(--max-width) / 2 - 20px);
}
.sponsor-item .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
}
.sponsor-item .info .main {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}
.sponsor-item .info .sub {
  font-size: 12px;
  line-height: 1.2;
  color: var(--vp-c-text-3);
}
.special .sponsor-item {
  height: 160px;
}
.special .sponsor-item img {
  max-width: 300px;
  max-height: 150px;
}

/* dark mode */
.dark .aside .sponsor-item,
.dark .landing .sponsor-item {
  background-color: var(--vp-c-gray-soft);
}
.aside .sponsor-item img,
.landing .sponsor-item img {
  transition: filter 0.2s ease;
}
.dark .aside .sponsor-item img,
.dark .landing .sponsor-item img {
  filter: grayscale(1) invert(1);
}
.dark .sponsor-item:hover img {
  filter: none;
}

/* aside mode (on content pages) */
.sponsor-container.platinum.aside {
  --max-width: 110px;
  column-gap: 1px;
}
.aside .sponsor-item {
  margin: 1px 0;
}
.aside .special .sponsor-item {
  width: 100%;
  height: 70px;
}
.aside .special .sponsor-item img {
  max-width: 120px;
  max-height: 36px;
}
</style>
