import React,{ Fragment } from "react"
import Carditem from "./carditems"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery query={ graphql`
        query {
          allContentfulPhotos {
            edges {
              node {
                photos {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }`
      } 
    render = {data => (
            <Fragment>
              {
                  data.allContentfulPhotos.edges.map(({ node }) => {
                          return <Carditem imageUrl={node.photos.fluid.src} />
                      }
                  )
              }
          </Fragment>
        ) 
      }
    />
)
