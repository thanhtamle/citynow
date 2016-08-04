name := """play-scala-backend"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "com.typesafe.slick" %% "slick" % "3.1.1",
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "com.typesafe" %% "jse" % "1.1.2",
  "com.github.tminglei" %% "slick-pg" % "0.14.1",
  "com.github.tminglei" %% "slick-pg_date2" % "0.14.1",
  "com.typesafe.play" %% "play-slick" % "2.0.2"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
