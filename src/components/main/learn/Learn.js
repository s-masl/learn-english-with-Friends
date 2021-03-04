import {useSpring, animated, interpolate} from 'react-spring'
import {useDrag} from 'react-use-gesture'
import CardContainer from "./card/CardContainer";
import styles from "./Learn.module.css"


function Learn(props) {
    const config = {
        mass: 1.8,
        friction: 26,
        duration: undefined
    }
    const [{xy}, set] = useSpring(() => ({xy: [0, 0]}))
    const bind = useDrag(
        ({down, direction: [xDir], velocity, movement}) => {
            const trigger = velocity > 0.4;
            const dir = xDir < 0 ? -1 : 1;
            if (!down && (trigger || (Math.abs(movement[0]) > 50))) {
                set({xy: [(2 * window.innerWidth) * dir, 0], config})
                setTimeout(() => set({xy: [0, -(2 * window.innerHeight)], config: {duration: 1}}), 200)
                setTimeout(() => {
                    dir === -1 ? props.markKnow() : props.markUnknown();
                    set({xy: [0, 0], config})
                }, 250)
            } else set({xy: down ? movement : [0, 0], config})
        }
    )
    return <div className={styles.cardTable}>
        <animated.div className={styles.card} {...bind()} style={{
            transform: interpolate([xy], ([x, y]) => `translate3D(${x}px, ${y}px, 0)`)
        }}>
            <CardContainer/>
        </animated.div>
    </div>
}

export default Learn;
