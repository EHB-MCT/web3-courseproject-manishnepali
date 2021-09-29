import { ref, reactive, toRefs } from "@vue/reactivity";
export default function() {

    const val = ref("");
    const animes = reactive({list: [[]]});
    const animeData = async () => {
        const response = await fetch("https://api.jikan.moe/v3/anime/1");
        const json = await response.json();
        console.log(json);
        animes.list = ref(json);
    };
    return {val, ...toRefs(animes), animeData}
}