import { shallowMount } from "@vue/test-utils";
import Result from "../../src/components/Result.vue";

describe('Result component', () => {
    let wrapper;
    const $route = {
        name: 'quiz',
        params: {}
    }
    it("should render the  Quiz component", () => {
        const $store = {
            getters: {
                currentObject: {
                    "shoes": [
                        {
                            "id": "cloud",
                            "name": "Cloud",
                            "rating": 5
                        },
                        {
                            "id": "cloudx",
                            "name": "Cloud X",
                            "rating": 0
                        },
                        {
                            "id": "cloudflow",
                            "name": "Cloudflow",
                            "rating": 0
                        }
                        ],
                    "userSelections": [
                        {
                            "id": 0,
                            "copy": "Male",
                            "nextQuestion": 1,
                            "ratingIncrease": {
                                "cloud": 5,
                                "cloudx": 4,
                                "cloudflow": 3,
                                "cloudventure": 1,
                                "cloudsurfer": 3,
                                "cloudventure_waterproof": 3,
                                "cloudventure_peak": 1,
                                "cloudflyer": 3
                            }
                        }
                    ]
                }
            },
            state: {
                result_object: {

                }
            }
        }
        wrapper = shallowMount(Result,
            {mocks: {
                    $route,
                    $store
                }
            }
        );
        expect(wrapper.exists()).toBe(true);
    });

    it("should show recommended shoes based on rating", async () => {
        wrapper.setData({ quizData: {"questions": [
                    {
                        id: 0,
                        copy: "Are you male or female?",
                        answers: [
                            {
                                id: 0,
                                copy: "Male",
                                nextQuestion: 1,
                                ratingIncrease: {
                                    cloud: 5,
                                    cloudx: 4,
                                    cloudflow: 3,
                                    cloudventure: 1,
                                    cloudsurfer: 3,
                                    cloudventure_waterproof: 3,
                                    cloudventure_peak: 1,
                                    cloudflyer: 3
                                }
                            },
                            {
                                id: 1,
                                copy: "Female",
                                nextQuestion: 1,
                                ratingIncrease: {
                                    cloud: 2,
                                    cloudx: 4,
                                    cloudflow: 2,
                                    cloudventure: 1,
                                    cloudsurfer: 3,
                                    cloudventure_waterproof: 3,
                                    cloudventure_peak: 1,
                                    cloudflyer: 3
                                }
                            }
                        ]
                    }]}, currentQuestion: 0});
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain(
            'Based on your selection we\'ve decided Cloud,'
        );
    });
})