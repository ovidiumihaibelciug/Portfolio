import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';

import anime from 'animejs';

import { sskills } from "../utils";

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    medium: {
        fontSize: 35,
        fontWeight: '400',
    },
    small: {
        fontSize: 16,
    },

};


export default class TagSkills extends Component {

    render() {
        const skills = document.querySelectorAll('.abcde');
        var basicTimeline = anime.timeline();

        anime({
            targets: '.skill-text-tag',
            duration: 2000,
            opacity: 1,
            loop: true,
            delay: function (target, index) {
                return index * 100;
            },
            loop: true
        });

        return (
            <div className="skill-canvas">
                <div className='app-outer'>

                    <div className='app-inner'>
                        <TagCloud
                            className='tag-cloud'
                            style={{
                                fontFamily: 'sans-serif',
                                fontSize: 30,
                                padding: 7,
                            }}>
                            {
                                sskills.map(skill => {
                                    let style;
                                    const { id, imp, name } = skill;
                                    if (imp === 1) {
                                        style = styles.large;
                                    } else if (skill.imp === 2) {
                                        style = styles.medium;
                                    } else {
                                        style = styles.small;
                                    }
                                    style.animationDelay = id + 's';
                                    if (!id % 7) {
                                        style.fontFamily = 'courier';
                                    }
                                    console.log(style);
                                    return <div className="skill-text-tag" style={style}>{name}</div>
                                })
                            }
                        </TagCloud>
                    </div>
                </div>
            </div>
        )
    }
}
