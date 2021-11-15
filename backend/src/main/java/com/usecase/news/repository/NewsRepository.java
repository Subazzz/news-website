package com.usecase.news.repository;

import java.util.List;

//import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import com.usecase.news.model.NewsFeed;

@Repository
public interface NewsRepository extends MongoRepository<NewsFeed, String> {
	
	public NewsFeed findByCategory(String category );
	
	public NewsFeed findByPriority(String priority );
	
	public NewsFeed findByNo(String newsTitle );

	public List<NewsFeed> findByDate(String date );

	//public List<NewsFeed> findByCategory(String category );
}
