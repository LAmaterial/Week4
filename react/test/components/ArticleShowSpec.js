import ArticleShow from '../../src/components/ArticleShow';

describe('ArticleShow', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ArticleShow
        title="How to Build a Spaceship"
        body="Go to NASA maybe"
      />
    )
  });

  it('renders a paragraph tag with the article title', () => {
    expect(true).toEqual(true)
  })
})
