package com.usecase.news.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Document("testcase")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsFeed {
	
	@Id
	private String id;
	
	private String category;
	private String priority;
	private String newsTitle;
	private String newsDescription;
	private String message;
	private String image;
	private String district;
	private String longDiscription;
	private String no;
	private String date;
	
}
