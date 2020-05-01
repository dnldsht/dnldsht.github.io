import ScrollTip from "~/components/scroll-tip";
export default {
    components: { ScrollTip },
    methods: {
        scroll() {
            this.$parent.next();
        }
    }

}