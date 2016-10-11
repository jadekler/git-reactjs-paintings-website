import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import aUrl from "file!./../../images/a.jpg"
import bUrl from "file!./../../images/b.jpg"
import cUrl from "file!./../../images/c.jpg"
import dUrl from "file!./../../images/d.jpg"
import eUrl from "file!./../../images/e.jpg"
import fUrl from "file!./../../images/f.jpg"
import gUrl from "file!./../../images/g.jpg"
import hUrl from "file!./../../images/h.jpg"
import iUrl from "file!./../../images/i.jpg"
import jUrl from "file!./../../images/j.jpg"
import kUrl from "file!./../../images/k.jpg"
import lUrl from "file!./../../images/l.jpg"
import mUrl from "file!./../../images/m.jpg"

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {img: `./dist/${aUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${bUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${cUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${dUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${eUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${fUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${gUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${hUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${iUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${jUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${kUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${lUrl}`, title: 'Foo', author: 'Hanna Schulz'},
  {img: `./dist/${mUrl}`, title: 'Foo', author: 'Hanna Schulz'},
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile, i) => (
        <GridTile
          key={i}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
        >
          <img src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;