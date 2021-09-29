import { toRefs, reactive, watch } from "@vue/reactivity";
export default function(url, option) {
    const state = reactive({

        response: [],
        error: null,
        fetching: true,
    })
    const fetchData = async() => {
        try{
            const response = await fetch(url, option);
            const posts = await response.json();
        }catch{
            state.error = errors;
        }
    }

}