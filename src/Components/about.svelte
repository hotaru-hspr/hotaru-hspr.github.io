<script>
  import { onMount } from "svelte";

  export let status = false;

  let is1Replaced = false;
  let is2Replaced = false;
  let is3Replaced = false;

  if (status == true) {
    is1Replaced = true;
    is2Replaced = true;
    is3Replaced = true;
  } else {
    onMount(() => {
      setTimeout(() => {
        is1Replaced = true;
      }, 1000);
      setTimeout(() => {
        is2Replaced = true;
      }, 1400);
      setTimeout(() => {
        is3Replaced = true;
      }, 1800);
    });
  }
</script>

<main
  class="sm:w-1/2 w-full md:mt-8 ml-8 pr-8 mb-32 transition-opacity duration-500 ease-in-out min-w-screen"
>
  <div class="py-4 group transition-all duration-800">
    <span
      class="text-2xl bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-no-repeat transition-all duration-1500 ease-out"
      class:bg-[length:0%_30px]={is1Replaced}
      class:bg-[length:100%_30px]={!is1Replaced}
      class:text-black={is1Replaced}
      class:text-pink-500={!is1Replaced}
    >
      <span class:visible={is1Replaced} class:invisible={!is1Replaced}>👋</span
      >Hello, I’m
      <span
        class="font-bold"
        class:text-[#1B4965]={is1Replaced}
        class:text-pink-500={!is1Replaced}
      >
        Prajesh</span
      >, an undergrad student at Shiv Nadar University Chennai, pursuing my
      Bachelors in Computer Science.
    </span>
  </div>
  <div class="py-4 group transition-all duration-800">
    <span
      class="text-2xl bg-right-bottom bg-gradient-to-l from-pink-500 to-pink-500 bg-no-repeat transition-all duration-1500 ease-out"
      class:bg-[length:0%_30px]={is2Replaced}
      class:bg-[length:100%_30px]={!is2Replaced}
      class:text-black={is2Replaced}
      class:text-pink-500={!is2Replaced}
    >
      I’m a developer, currently focused on Full Stack Development and picking
      up Game Development for something I’ve planned in the long run.
    </span>
  </div>
  <div class="py-4 group transition-all duration-800">
    <span
      class="text-2xl bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-no-repeat transition-all duration-1500 ease-out"
      class:bg-[length:0%_30px]={is3Replaced}
      class:bg-[length:100%_30px]={!is3Replaced}
      class:text-black={is3Replaced}
      class:text-pink-500={!is3Replaced}
    >
      With my love for art and design, combined with my lifelong interest in
      development, I love to identify problems and create solutions that are
      visually appealing, highly functional and accessible to people.
    </span>
  </div>
</main>
