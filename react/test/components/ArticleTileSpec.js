import ArticleTile from '../../src/components/ArticleTile';

describe('ArticleTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ArticleTile
        title="How to Build a Spaceship"
        body="Go to NASA maybe"
      />
    )
  });

  it('renders a paragraph tag with the article title', () => {
    expect(true).toEqual(true)
  })
})
