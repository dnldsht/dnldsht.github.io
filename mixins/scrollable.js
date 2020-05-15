import debounce from 'lodash/debounce';
import ScrollTip from "~/components/scroll-tip";
var lastScroll = new Date().getTime();
export default {
    layout: "fullpage",
    components: { ScrollTip },
    data: () => ({
        goneDown: false
    }),
    methods: {
        scroll() {
            this.$parent.next();
        },
        handleScroll(event) {

            event.preventDefault();
            var delta = event.wheelDelta || -event.detail;
            // console.log(delta)

            const timeNow = new Date().getTime();
            const quietPeriod = 1000;
            if (timeNow - lastScroll < quietPeriod + 0 || Math.abs(delta) < 10) {

                return;
            }

            // Any code to be executed when the window is scrolled
            // this.isUserScrolling = (window.scrollY > 0);
            // console.log('calling handleScroll', event);
            // console.log(event)

            if (delta > 0) {

                if (this.prev) this.prev()

            } else {
                // this.removeListener()
                if (this.next) this.next()
                // this.goneDown = true
                // this.beforeDestroy()
                console.log('down', this.$el, delta, event)
            }

            lastScroll = timeNow
        },
        removeListener() {
            this.$el.removeEventListener('mousewheel', this.handleDebouncedScroll);
        }
    }
    ,

    mounted() {
        // { leading: true, trailing: false }
        this.handleDebouncedScroll = debounce(this.handleScroll, 10);
        this.$el.addEventListener('mousewheel', this.handleDebouncedScroll);

    },

    beforeDestroy() {

        this.removeListener()

        // I switched the example from `destroyed` to `beforeDestroy`
        // to exercise your mind a bit. This lifecycle method works too.
        // this.$el.removeEventListener('wheel', this.handleDebouncedScroll);
    }

}