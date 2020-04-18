# React Intro

This is a responsive website cloned after [https://octodex.github.com/](https://octodex.github.com/) using React

# Objectives

- Build on your knowledge of HTML, CSS, & Javascript
- Introduce React Components
- Learn to identify parts of a web site as Components
- Understand and use "props" in React

## Live Site

[LIVE SITE](https://react-intro-austinparvin.netlify.app/)

![Octo Clone](https://i.imgur.com/oYquAU4.png)

# Includes: 

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [REACT](https://reactjs.org/docs/getting-started.html)
- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)


## Featured Code

### Mapping over cats

```JSX
return (
      <main>
        {cats.map(cat => {
          return (
            <Card
              name={cat.name}
              url={cat.url}
              imgUrl={cat.imgUrl}
              num={cat.num}
              owner={cat.owner}
              ownerUrl={cat.ownerUrl}
              ownerImgUrl={cat.ownerImgUrl}
            />
          )
        })}
      </main>
    )
 ```
 
