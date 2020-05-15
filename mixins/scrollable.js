import ScrollTip from "~/components/scroll-tip";

export default {
    layout: "fullpage",
    components: { ScrollTip },

    methods: {
        next() {
            this.$parent.next();
        },

    }



}