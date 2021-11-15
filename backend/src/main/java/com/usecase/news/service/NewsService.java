package com.usecase.news.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.news.model.NewsFeed;
import com.usecase.news.repository.NewsRepository;

@Service
public class NewsService {
	
	@Autowired
	NewsRepository newsRepository;

	
	public List<NewsFeed> homepage ()
	{
		return newsRepository.findAll();	

	}
	
	public  NewsFeed fetchCategory(String category) {
		NewsFeed catg = null;
		try {
			catg = newsRepository.findByCategory(category );
			if(catg==null) {
				catg= new NewsFeed();
				catg.setMessage("Category not found");
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return catg;
		
	}
	 
	
	public  NewsFeed fetchNum(String no) {
		NewsFeed catg = null;
		try {
			catg = newsRepository.findByNo(no);
			if(catg==null) {
				catg= new NewsFeed();
				catg.setMessage("Category not found");
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return catg;
	}
	
	
}