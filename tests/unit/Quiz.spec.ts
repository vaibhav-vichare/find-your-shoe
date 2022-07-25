import { shallowMount } from "@vue/test-utils";
import Quiz from "../../src/components/Quiz.vue";

describe('Quiz component', () => {
  let wrapper;
  const $route = {
    name: 'quiz',
    params: {}
  }
  it("should render the  Quiz component", () => {
    const $store = {
      getters: {
        currentObject: {
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
    wrapper = shallowMount(Quiz,
        {mocks: {
            $route,
            $store
          }
        }
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the next question when answered", async () => {
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
    expect( wrapper.find( '.question' ).exists() ).toBe( true );
  });
})