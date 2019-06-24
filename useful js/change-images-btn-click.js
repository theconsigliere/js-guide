export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? "icon-heart" : "icon-heart-outline";
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `ìmg/iconString.svg#${iconString}`);
  // icons.svg#icon-heart-outlined
};
